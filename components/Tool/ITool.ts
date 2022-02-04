export interface ToolProps {
  _id: string;
  body: [
    {
      _key: string;
      _type: string;
      children: [
        {
          _key: string;
          _type: string;
          marks: [];
          text: string;
        }
      ];
      markDefs: string[];
      style: string;
    }
  ];
  categories: [
    {
      _key: string;
      _ref: string;
      _type: string;
    }
  ];
  emblemImage: string;
  gridImage: string;
  title: string;
  link: string;
}
