import CardEditor from ".";
const Template = (args) => <CardEditor {...args} />;

export default {
  title: "component/CardEditor",
  component: CardEditor,
};

export const Primary = Template.bind({});
Primary.args = {
  isEdit: false,
  originData: {
    id: 1651947971992,
    cardNumbers: ["1233", "2112", "3231", "3213"],
    dueDate: {
      month: "12",
      year: "55",
    },
    owner: "aaa",
    cvc: "123",
    password: {
      firstPassword: "1",
      secondPassword: "2",
    },
    company: {
      color: "red",
      name: "레드 카드",
    },
    nickname: "zzz",
  },
};
