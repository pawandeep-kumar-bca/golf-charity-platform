export default function ScoreList({ scores }) {
  return (
    <div>
      {scores.length === 0 ? (
        <p className="text-gray-400">No scores added yet</p>
      ) : (
        scores.map((s) => (
          <div
            key={s.id}
            className="bg-gray-700 p-3 rounded mb-2 flex justify-between"
          >
            <span>Score: {s.score}</span>
            <span className="text-sm text-gray-300">
              {new Date(s.date).toLocaleDateString()}
            </span>
          </div>
        ))
      )}
    </div>
  )
}