export type Feature  = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};
export type OtherFeature = {
  id: string;
  description: string[];
  icon: {
    url: string;
    width: number;
    height: number;
  };
};
export type Plan = {
  id: string;
  title: string; 
  priceTitle: string;
  price: number;
  functionTitle: string;
  functions: string[];
  isPaid: boolean;
};
export type AnswerContent = {
  type: 'text' | 'link'; 
  value: string;
  href?: string;
}
export type FAQ = {
  question: string;
  answer: AnswerContent[];
};