import CardPreviewBack from "./CardPreviewBack/CardPreviewBack";
import CardPreviewFront from "./CardPreviewFront/CardPreviewFront";

interface Props {
  cardInformation: CardInformation;
  previewStatus: "front" | "back";
}

export default function CardPreview({ cardInformation, previewStatus }: Props) {
  return (
    <>
      {previewStatus === "front" && (
        <CardPreviewFront cardInformation={cardInformation} />
      )}
      {previewStatus === "back" && (
        <CardPreviewBack cardInformation={cardInformation} />
      )}
    </>
  );
}
