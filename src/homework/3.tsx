import React, { useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
