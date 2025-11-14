export default function SimpleCard({ img, Title, Disc }) {
  return (
    <div
      className="
        w-70 mr-10 bg-white rounded-xl overflow-hidden 
        shadow-md
        hover:shadow-xl 
        hover:-translate-y-2 
        transition-all duration-300 
        cursor-pointer
      "
    >
      {/* Image Section */}
      <div className="w-full h-40">
        <img
          src={img}
          alt="card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{Title}</h3>
        <p className="text-sm text-gray-600 mt-1 text-justify">{Disc}</p>
      </div>

    </div>
  );
}
