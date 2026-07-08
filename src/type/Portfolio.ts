
type propsPortofolio = {
    img:string;
    nom:string
}
export type portoServiceProps = {
  marketing: propsPortofolio[],
  development: propsPortofolio[],
  optimization: propsPortofolio[],
 integration: propsPortofolio[]
 all: propsPortofolio[]
};
