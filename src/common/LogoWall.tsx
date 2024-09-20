export interface LogoWallProps {
  src1: string;
  src2?: string;
  src3?: string;
  alt1: string;
  alt2?: string;
  alt3?: string;
}

const LogoWall = ({src1, src2, src3, alt1, alt2, alt3}: LogoWallProps) => {
  return (
    <div class={`flex flex-cols-3 justify-center items-center`}>
      <div className={`w-fit rounded-full max-w-[150px] m-2`}>
        <img
          src={src1}
          alt={alt1}
        />
      </div>
      <div className={`w-fit rounded-full max-w-[150px] m-2`}><img
        src={src2}
        alt={alt2}
      /></div>
      <div className={`w-fit rounded-full max-w-[150px] m-2`}><img
        src={src3}
        alt={alt3}
      /></div>
    </div>
  );
}

export default LogoWall
