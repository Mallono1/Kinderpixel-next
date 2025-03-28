import React from 'react';
import hero from './../assets/images/for_ref.jpg';

const ModernArtGalleryHero: React.FC = () => {
  return (
    <div className='grid grid-cols-12 min-h-screen overflow-hidden'>
      <div className='col-span-4 bg-black'></div>
      <div className='col-span-4 relative flex flex-col items-center justify-center'>
        <div className='absolute -left-[20.7rem] top-1/5 z-10 text-start w-full'>
          <h1 className='text-7xl font-bold leading-tight'>
            <span className='text-white stroke-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]'>
              KINDERPI
              <span className='text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]'>
                XEL
              </span>
            </span>
            <br />
            <span className='text-white stroke-black drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]'>
              GALLERY
            </span>
          </h1>
        </div>

        <img
          src={hero}
          alt='Art Gallery Visitors'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='flex justify-center items-center col-span-4 bg-white'>
        <div className='absolute z-10 text-start mt-6'>
          <p className='text-lg text-black w-[26rem] drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]'>
            A gallery where young artists shine! KinderPixel Art Gallery
            showcases the creativity of children ready to compete and inspire
            through their artwork.
          </p>

          <button className='mt-4 bg-black text-white font-bold rounded-sm shadow-md transition-all duration-300 hover:bg-gray-900 flex items-center gap-2 cursor-pointer'>
            <span className='px-5 py-2'>Explore Artwork</span>
            <span className='bg-yellow-400 text-black px-3 py-2 rounded-r-sm'>
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernArtGalleryHero;
