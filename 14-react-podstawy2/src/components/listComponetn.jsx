const ListComponent = () => {
  const tasks = [
    {
      id: 1,
      name: "Jest fajnie",
    },
    {
      id: 2,
      name: "Ale fajny dzien w ALX",
    },
  ];

  return (
    <div>
      {tasks.map((t) => {
        return (
          <div key={t.id}>
            <p>{t.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
