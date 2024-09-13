export function List({ title, items }) {
    return (
      <>
        <div>
                <h6 className="font-bold pt-2">{title}</h6>
                <ul>
                    {
                        items.map((item) => {
                        return <li className="text-grey-500 hover:text-white cursor-pointer">{item}</li>
                     })
                    }
                </ul>
        </div>
      </>
    );
}