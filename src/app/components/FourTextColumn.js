// components/FourColumnLayout.js

export default function FourColumnLayout() {
    return (
      <div className="container mx-auto px-4 py-8 text-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-black p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4 text-center">Heading 1</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Heading 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Heading 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
        </div>
      </div>
    );
  }
  