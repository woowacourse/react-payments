interface SpacingProps {
  size: number
}

export default function Spacing({ size }: SpacingProps) {
  return (
    <div
      style={{
        height: `${size}px`,
      }}
    />
  )
}
