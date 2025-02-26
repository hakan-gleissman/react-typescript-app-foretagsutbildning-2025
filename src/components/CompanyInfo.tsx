type CompanyInfoProps = {
  companyName: string;
  contactMail: string;
};
const CompanyInfo = ({ companyName, contactMail }: CompanyInfoProps) => {
  return (
    <div>
      <span className="me-3">&copy;{companyName}</span>
      <span className="me-3">{contactMail}</span>
    </div>
  );
};

export default CompanyInfo;
