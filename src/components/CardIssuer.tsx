export default function CardIssuer() {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', padding: 0, marginBottom: '16px' }}>
      <label
        htmlFor="cardIssuer"
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
        })}
      >
        카드사를 선택해 주세요
      </label>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
          marginBottom: '16px',
        })}
      >
        현재 국내 카드사만 가능합니다.
      </p>

      <select
        id="cardIssuer"
        name="cardIssuer"
        css={(theme) => ({
          width: '100%',
          height: '32px',
          border: `1px solid ${theme.colors.inactiveBorder}`,
          borderRadius: '3px',
          color: theme.colors.inactiveBorder,

          '&:focus': {
            borderColor: theme.colors.black,
            color: theme.colors.black,
            outline: 'none',
          },
        })}
        defaultValue=""
      >
        <option value="" disabled>
          카드사를 선택해주세요
        </option>
        <option value="BC카드">BC카드</option>
        <option value="신한카드">신한카드</option>
        <option value="카카오뱅크">카카오뱅크</option>
        <option value="현대카드">현대카드</option>
        <option value="우리카드">우리카드</option>
        <option value="롯데카드">롯데카드</option>
        <option value="하나카드">하나카드</option>
        <option value="국민카드">국민카드</option>
      </select>
    </div>
  );
}
