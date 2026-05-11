

test('기본 테스트', async () => {
    const response = await fetch('주소');
    const data = await response.json();
    
    await expect(data.resolves.toEqual({객체모양}));
})