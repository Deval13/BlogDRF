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
      <>
        <div className="w-full bg-grey-200 text-white py-y px-2  ">
          <div className="grid grid-cols-2  mx-auto  md:grid-cols-6 border-b-2">
            {sections.map((section) => {
              return <List title={section.title} items={section.items} />;
            })}
            <div className="col-span-2 pt-8 md:pt-2 ">
              <p className="font-bold text-lg">Subscribe To news Letter!!</p>
              <p>
                All the new and lastest updates and resources to your inbox
                every week.
              </p>

              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="pt-2 w-full mr-4"
                />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* {social Icons } */}
          <div className="flex flex-col px-2 py-2 mx-auto justify between">
                    {
                        items.map((item) => {
                            return <item.icon/>
                        })
                    }
          </div>
        </div>
      </>
    );
}