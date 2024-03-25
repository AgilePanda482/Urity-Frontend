import { Input } from "@nextui-org/react";

export default function Nombre({ field, form: { touched, errors }, ...props }) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
        type="text" 
        label="Nombre completo" 
        color="default"
        bordered
        {...field} // Pass field props to Input component
        {...props} // Pass other props
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
}
