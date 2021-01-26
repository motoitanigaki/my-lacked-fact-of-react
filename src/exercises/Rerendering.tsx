import { useEffect, useState } from "react";

type Props = {
  value: string;
};

// Just display value in props.
const Display1 = (props: Props) => {
  return <div>{props.value}</div>;
};

// In case of setting props to state. Props change won't update the state.
const Display2 = (props: Props) => {
  const [value, setValue] = useState(props.value);

  // To update the state, use useEffect.
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return <div>{value}</div>;
};

const Rerendering = () => {
  const values = ["a", "b", "c"];
  const [selectedValue, setSelectedValue] = useState<string>("");
  return (
    <>
      <ul>
        {values.map((value: string) => (
          <li key={value} onClick={() => setSelectedValue(value)}>
            {value}
          </li>
        ))}
      </ul>
      <Display1 value={selectedValue} />
      <Display2 value={selectedValue} />
    </>
  );
};

export default Rerendering;
