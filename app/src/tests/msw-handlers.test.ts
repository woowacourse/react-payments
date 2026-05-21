/**
 * MSW 핸들러 단위 테스트
 *
 * 각 HTTP 핸들러(GET /cards, POST /cards, DELETE /cards/:id)가
 * 올바른 상태코드와 응답 본문을 반환하는지 fetch를 직접 호출해 검증한다.
 * DB 상태를 공유하므로 각 테스트 전에 db.cards를 초기화한다.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { db } from '../mocks/db';

const BASE_URL = 'https://api.example.com';

// 유효한 Visa 카드 페이로드 (number는 16자리)
const validCardPayload = {
  number: '4111111111111111',
  expirationDate: '12/26',
  cvc: '123',
  issuerCode: '41',
};

beforeEach(() => {
  db.cards = [];
});

// ─────────────────────────────────────────────
// GET /cards
// ─────────────────────────────────────────────
describe('GET /cards', () => {
  it('카드가 없을 때 빈 배열을 반환한다', async () => {
    const res = await fetch(`${BASE_URL}/cards`);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual([]);
  });

  it('등록된 카드 목록을 반환하고 가운데 6자리를 마스킹한다', async () => {
    db.cards.push({ id: 'test-id-1', ...validCardPayload });

    const res = await fetch(`${BASE_URL}/cards`);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toHaveLength(1);
    // 앞 6자리 + ****** + 뒤 4자리
    expect(body[0].number).toBe('411111******1111');
    expect(body[0].id).toBe('test-id-1');
  });

  it('여러 장의 카드를 모두 반환한다', async () => {
    db.cards.push(
      { id: 'id-1', ...validCardPayload },
      { id: 'id-2', number: '5111111111111111', expirationDate: '06/27', cvc: '456', issuerCode: '31' },
    );

    const res = await fetch(`${BASE_URL}/cards`);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toHaveLength(2);
  });
});

// ─────────────────────────────────────────────
// POST /cards
// ─────────────────────────────────────────────
describe('POST /cards', () => {
  it('유효한 카드 정보로 201과 생성된 id를 반환한다', async () => {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validCardPayload),
    });

    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(typeof body.id).toBe('string');
  });

  it('카드 등록 후 db에 카드가 추가된다', async () => {
    await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validCardPayload),
    });

    expect(db.cards).toHaveLength(1);
    expect(db.cards[0].number).toBe(validCardPayload.number);
  });

  it('유효하지 않은 카드 번호(브랜드 미인식)로 400 INVALID_CARD_NUMBER를 반환한다', async () => {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validCardPayload, number: '9999999999999999' }),
    });

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.code).toBe('INVALID_CARD_NUMBER');
    expect(typeof body.message).toBe('string');
  });

  it('CVC가 000이면 400 INVALID_CVC를 반환한다', async () => {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validCardPayload, cvc: '000' }),
    });

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.code).toBe('INVALID_CVC');
  });

  it('현재 연도이면서 이미 지난 달로 400 INVALID_EXPIRATION_DATE를 반환한다', async () => {
    // isValidCardExpiryDate는 "같은 연도인데 월이 이미 지났을 때"만 invalid를 반환한다.
    const now = new Date();
    const currentYear = now.getFullYear().toString().slice(-2); // e.g. "26"
    const pastMonth = String(now.getMonth()).padStart(2, '0');  // 0 → "00" (1월이면 "00"이라 skip)

    // 1월이면 과거 달이 없으므로 테스트 스킵
    if (now.getMonth() === 0) return;

    const res = await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validCardPayload, expirationDate: `${pastMonth}/${currentYear}` }),
    });

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.code).toBe('INVALID_EXPIRATION_DATE');
  });

  it('Master 카드(5111...)도 정상 등록된다', async () => {
    const res = await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validCardPayload, number: '5111111111111111' }),
    });

    expect(res.status).toBe(201);
  });

  it('에러 발생 시 db에 카드가 추가되지 않는다', async () => {
    await fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validCardPayload, cvc: '000' }),
    });

    expect(db.cards).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────
// DELETE /cards/:id
// ─────────────────────────────────────────────
describe('DELETE /cards/:id', () => {
  it('존재하는 카드를 삭제하면 204를 반환한다', async () => {
    db.cards.push({ id: 'delete-me', ...validCardPayload });

    const res = await fetch(`${BASE_URL}/cards/delete-me`, { method: 'DELETE' });

    expect(res.status).toBe(204);
  });

  it('삭제 후 db에서 해당 카드가 제거된다', async () => {
    db.cards.push(
      { id: 'keep-me', ...validCardPayload },
      { id: 'delete-me', ...validCardPayload },
    );

    await fetch(`${BASE_URL}/cards/delete-me`, { method: 'DELETE' });

    expect(db.cards).toHaveLength(1);
    expect(db.cards[0].id).toBe('keep-me');
  });

  it('존재하지 않는 id를 삭제해도 204를 반환한다 (멱등성)', async () => {
    const res = await fetch(`${BASE_URL}/cards/non-existent-id`, { method: 'DELETE' });

    expect(res.status).toBe(204);
  });

  it('같은 id를 두 번 삭제해도 db 길이가 음수가 되지 않는다', async () => {
    db.cards.push({ id: 'once', ...validCardPayload });

    await fetch(`${BASE_URL}/cards/once`, { method: 'DELETE' });
    await fetch(`${BASE_URL}/cards/once`, { method: 'DELETE' });

    expect(db.cards).toHaveLength(0);
  });
});
