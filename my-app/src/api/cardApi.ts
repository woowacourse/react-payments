
export interface SendingData {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export const postCard = async (
  sendingData: SendingData,
): Promise<{ id: string }> => {
  const response = await fetch(`${import.meta.env.BASE_URL}cards`, {  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sendingData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
