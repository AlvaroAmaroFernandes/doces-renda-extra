export default function AdSpace({ className }: { className?: string }) {
  return (
    <div className={`w-full h-[250px] bg-muted flex items-center justify-center border rounded-md ${className}`}>
      <p className="text-muted-foreground text-sm">Espaço reservado para anúncios</p>
    </div>
  )
}
