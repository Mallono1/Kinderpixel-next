import React from 'react';

const ageLevels = [
  {
    age: 'Age 2-4',
    description: 'Early childhood creativity sparks imagination.',
    src: 'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg',
  },
  {
    age: 'Age 5-7',
    description: 'Building foundational skills through art and play.',
    src: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg',
  },
  {
    age: 'Age 8-10',
    description: 'Exploring creativity with deeper expression.',
    src: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg',
  },
  {
    age: 'Age 11-14',
    description: 'Developing individuality and artistic techniques.',
    src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg',
  },
  {
    age: 'Age 15-18',
    description: 'Refining skills and preparing for artistic futures.',
    src: 'https://images.pexels.com/photos/3746209/pexels-photo-3746209.jpeg',
  },
];

const ImageGrid: React.FC = () => {
  return (
    <div id='gallery' className='container mx-auto px-4 py-10'>
      <h2 className='text-center text-3xl font-semibold mb-6'>
        Student Age Levels
      </h2>
      <p className='text-center text-gray-500 mb-10'>
        Discover the different age levels and the students who bring creativity
        and energy to their learning journey.
      </p>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]'>
        {ageLevels.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg group 
              ${
                index % 3 === 0
                  ? 'col-span-2 row-span-2'
                  : 'col-span-1 row-span-1'
              }
            `}
          >
            <img
              src={item.src}
              alt={item.age}
              className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center'>
              <p className='text-white text-lg font-semibold text-center px-4'>
                {item.description}
              </p>
            </div>
            <div className='absolute bottom-3 left-3 text-white font-semibold text-lg'>
              {item.age}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
