export default function ColorsPage() {
  const colors = [
    'primary',
    'secondary',
    'accent',
    'indigo-dye',
    'indigo-dye-alt',
    'prussian-blue',
    'rich-black',
    'rich-black-alt',
  ]

  const shades = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Custom Tailwind Colors</h1>
      {colors.map((color) => (
        <div key={color}>
          <h2 className="text-xl font-semibold mb-2">{color}</h2>
          <div className="grid grid-cols-10 gap-2">
            {shades.map((shade) => (
              <div
                key={`${color}-${shade}`}
                className={`bg-${color}-${shade} h-16 flex items-center justify-center text-white`}
              >
                {shade}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
