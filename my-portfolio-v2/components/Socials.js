// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine
} from 'react-icons/ri';
import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-3xl'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
       <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiLeetcode />
      </Link>
      {/*
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
