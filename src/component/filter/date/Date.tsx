import Select from "../../../ui/select/Select";

const Date = () => {
  return (
    <div>
      <Select
        options={[
          { value: "new", text: "Сначала новые" },
          { value: "old", text: "Сначала старые" },
        ]}
      />
    </div>
  );
};

export default Date;
