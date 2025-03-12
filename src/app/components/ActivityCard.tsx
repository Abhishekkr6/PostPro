interface ActivityCardProps {
    method: string;
    url: string;
    statusCode: number;
    responseTime: number;
    description: string;
    createdAt: string;
  }
  
  const methodColors: Record<string, string> = {
    GET: "bg-green-500/20 text-green-400",
    POST: "bg-blue-500/20 text-blue-400",
    PUT: "bg-yellow-500/20 text-yellow-400",
    DELETE: "bg-red-500/20 text-red-400",
  };
  
  export default function ActivityCard({
    method,
    url,
    statusCode,
    responseTime,
    description,
    createdAt,
  }: ActivityCardProps) {
    return (
      <div className="flex items-start space-x-4 border-b border-zinc-800 pb-4 last:border-0">
        <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${methodColors[method]}`}>
          <span className="text-xs font-bold">{method}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">
              {method} {url}
            </h4>
            <span className="text-xs text-zinc-400">
              {new Date(createdAt).toLocaleTimeString()}
            </span>
          </div>
          <p className="text-sm text-zinc-400">{description}</p>
          <div className="mt-1 flex items-center space-x-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                statusCode === 200 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
              }`}
            >
              {statusCode} {statusCode === 200 ? "OK" : "Failed"}
            </span>
            <span className="text-xs text-zinc-400">{responseTime}ms</span>
          </div>
        </div>
      </div>
    );
  }
  