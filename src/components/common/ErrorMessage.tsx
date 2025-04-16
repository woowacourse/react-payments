import { PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p
      style={{
        color: '#FF3D3D',
        fontSize: '12px',
      }}
    >
      {children}
    </p>
  )
}
