import { ObjectFieldTemplateProps, RJSFSchema } from "@rjsf/utils";

function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <>
      <div className="m-2 text-2xl">
        {props.title}
        {props.description}
      </div>
      <hr/>
      <div className="flex flex-wrap">
        {props.properties.map((element) => (
          <div className="m-2 flex-auto min-w-32 shrink-0">{element.content}</div>
        ))}
      </div>
    </>
  );
}

export default ObjectFieldTemplate;
