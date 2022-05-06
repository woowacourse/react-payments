export default function Form({ onSubmitForm, payload, children }) {
  return <form onSubmit={(event) => onSubmitForm(event, payload)}>{children}</form>;
}
