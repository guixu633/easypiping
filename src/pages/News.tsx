const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'EasyPiping Expands to New Markets in Southeast Asia',
      date: 'October 15, 2023',
      summary: 'We are thrilled to announce our new distribution centers in Vietnam and Thailand to better serve our customers.',
    },
    {
      id: 2,
      title: 'New Eco-Friendly Manufacturing Process Adopted',
      date: 'September 22, 2023',
      summary: 'Our commitment to sustainability continues with the adoption of a new low-emission production line.',
    },
    {
      id: 3,
      title: 'Q3 Financial Results Show Strong Growth',
      date: 'August 10, 2023',
      summary: 'EasyPiping reports a 15% increase in revenue for the third quarter, driven by high demand in the energy sector.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Company News</h1>
      <div className="grid gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-sm text-blue-600 mb-2">{item.date}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
            <p className="text-gray-600">{item.summary}</p>
            <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
              Read more &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

