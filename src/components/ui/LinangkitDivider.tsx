export default function LinangkitDivider() {
  return (
    <div className="relative h-[4px] my-12 mx-auto max-w-[300px]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "repeating-linear-gradient(45deg, #442a22, #442a22 10px, #8ec64c 10px, #8ec64c 20px)",
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      />
    </div>
  );
}
