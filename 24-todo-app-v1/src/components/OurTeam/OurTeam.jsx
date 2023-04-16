const people = [
  {
    name: 'Tetiana',
    role: 'Mother',
    imageUrl: './src/components/OurTeam/b.jpg',
  },
  {
    name: 'Dmytro',
    role: 'Father',
    imageUrl: '/a.jpg',
  },
];

export default function OurTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our family
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">........</p>
        </div>
        <div
          className="grid gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
        >
          {people.map((person) => (
            <div key={person.name} className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
