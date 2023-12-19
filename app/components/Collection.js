import CollectionList from "./CollectionList"

const Collection = () => {
  const collectionList = [
    {
      title: "Gold Coins",
      src: "/assets/collection/01.jpg",
    },
    {
      title: "Earrings",
      src: "/assets/collection/02.jpg",
    },
    {
      title: "Pendants",
      src: "/assets/collection/03.jpg",
    },
    {
      title: "Finger Rings",
      src: "/assets/collection/04.jpg",
    },
    {
      title: "Mangalsutras",
      src: "/assets/collection/05.jpg",
    },
    {
      title: "Neckwear",
      src: "/assets/collection/06.jpg",
    },
    {
      title: "Wedding Rings",
      src: "/assets/collection/07.jpg",
    },
    {
      title: "Chains",
      src: "/assets/collection/08.jpg",
    },
    {
      title: "Bangles",
      src: "/assets/collection/09.jpg",
    },
    {
      title: "Bracelets",
      src: "/assets/collection/10.jpg",
    },
    {
      title: "Nose Pins",
      src: "/assets/collection/11.jpg",
    },
    {
      title: "Pendant Sets",
      src: "/assets/collection/12.jpg",
    },
  ]
  return (
    <div>
      <div className="text-center text-4xl py-9 my-6">
        <p>KM CHOKSI COLLECTION</p>
      </div>
      <div className="grid grid-cols-6 justify-between mx-10">
        {collectionList.map((data) => (
          <CollectionList key={data.title} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Collection
