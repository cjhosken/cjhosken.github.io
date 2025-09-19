import "./CompanyBar.css";

export default function CompanyBar() {
  const companies = [
    {
      name: "ETC",
      img: "/images/logos/etc.png",
      link: "https://electrictheatre.tv/",
    },
    {
      name: "NCCA",
      img: "/images/logos/ncca.png",
      link: "https://www.bournemouth.ac.uk/about/our-faculties/faculty-media-communication/national-centre-computer-animation",
    }
  ];

  return (
    <div id="company-bar">
      {companies.map((company) => (
        <a
          key={company.name}
          className="company"
          href={company.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={company.img} alt={`${company.name} Logo`} />
        </a>
      ))}
    </div>
  );
}
