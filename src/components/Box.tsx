interface BoxProps {
  boxNumber: number;
}

export function Box({ boxNumber }: BoxProps) {
  return (
    <div className="flex justify-center items-center text-lg h-40 w-40 text-text1">
      {boxNumber}
    </div>
  );
}
