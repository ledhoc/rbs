export type Contact = {
  firstName: string;
  lastName: string;
  messages: string;
  email: string;
  package: "basic" | "standard" | "premium" | "full_service";
};
