import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { List } from './List';

export function Footer() {
    const sections = [
      {
        title: "Solutions",
        items: ["Marketing", "Analytics", "Commerce", "Data"],
      },
      {
        title: "Support",
        items: ["Pricing", "Documentations", "API", "Guide"],
      },
      {
        title: "Legal",
        items: ['Claim', "Privacy", "Terms", "Coditions"],
      },
      {
        title: "Company",
        items: ["About", "Blog", "Jobs", "Press"],
      },
    ];
    const items = [
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "",
      },
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "",
      },
      {
        name: "Github",
        icon: FaGithub,
        link: "",
      },
      {
        name: "X",
        icon: FaTwitter,
        link: "",
      },
    ];

    return (
    <footer className="w-full bg-gray-400 text-black py-8 px-4 mt-auto">
      <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-6 border-b-2 pb-6 ">
        {sections.map((section, idx) => {
          return <List key={idx} title={section.title} items={section.items} />;
        })}
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold text-lg">Subscribe To Newsletter!</p>
          <p>Get all the latest updates and resources to your inbox every week.</p>
          <form className="flex flex-col sm:flex-row mt-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-full sm:mr-4 rounded-md"
            />
            <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 mt-2 sm:mt-0 sm:ml-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center space-x-4 pt-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a key={idx} href={item.link} className="text-white">
              <Icon className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}