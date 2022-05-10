export default function Form({ onSubmitForm, nickname, children }) {
  return <form onSubmit={(event) => onSubmitForm(event, nickname)}>{children}</form>;
}
