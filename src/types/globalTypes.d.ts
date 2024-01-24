import { MyCustomGlobal } from "./classes";

declare global {
  interface Routes {
    path: string;
    component: () => JSX.Element;
    label: string;
    showInNavBar: boolean;
  }
  interface Dictionary<T = any> {
    [key: string]: T;
  }

  interface CriteriaByProd {
    field: keyof Product;
    operator: "equal" | "between";
    value: any;
  }
}
