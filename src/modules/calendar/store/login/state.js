// El state es nuestra fuente de la verdad en donde almacenaremos nuestra informacion global y es reactivo
export default () => ({
    isLoading: true,
    entries: [
        {
            id: '1',
            date: new Date().toDateString(),
            text: 'Est exercitation cillum aute minim proident est aliqua nulla officia. Voluptate excepteur duis quis consectetur nulla aliqua ea. Est laboris reprehenderit consectetur veniam. Excepteur aute deserunt laboris ea ad voluptate exercitation excepteur consequat dolor do tempor. Nulla pariatur nostrud dolor ex veniam labore adipisicing mollit officia laborum nisi. Id velit officia Lorem qui officia deserunt pariatur. Ex Lorem do ullamco culpa minim irure adipisicing ullamco est esse sint incididunt tempor.',
            picture: null
        },
        {
            id: '2',
            date: new Date().toDateString(),
            text: 'Tempor anim exercitation consectetur nostrud ex deserunt duis ea consequat eiusmod. Anim voluptate esse anim mollit id velit pariatur aliquip officia. Laborum ad elit consequat pariatur nostrud sint in ad fugiat anim. Veniam ex do ut ut ad ad non pariatur excepteur occaecat velit proident. Labore magna occaecat cillum cupidatat reprehenderit magna reprehenderit sint eu dolore nisi.',
            picture: null
        },
        {
            id: '3',
            date: new Date().toDateString(),
            text: 'Eiusmod in do proident qui pariatur. Sint ea Lorem dolor commodo sint deserunt id dolore esse anim ut. Lorem ea incididunt non duis qui ullamco culpa proident laborum dolore nisi. Elit veniam elit laboris adipisicing ad minim dolore ex. Laborum dolor laborum dolor dolore. Ea commodo voluptate ut nulla.',
            picture: null
        },
    ]
})