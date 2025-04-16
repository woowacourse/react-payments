import { PropsWithChildren } from 'react'

interface LabelProps {
  id: string
}

export default function Label({ id, children }: PropsWithChildren<LabelProps>) {
  return <label htmlFor={id}>{children}</label>
}
