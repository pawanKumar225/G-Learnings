import "./styles.css";

export default function App() {
  var users = [
    {
      id: 4153,
      name: "Dwaipayan Nambeesan",
      email: "dwaipayan_nambeesan@dare-mante.io",
      gender: "female",
      status: "active"
    },
    {
      id: 4152,
      name: "Dharmaketu Dwivedi",
      email: "dwivedi_dharmaketu@bartell.info",
      gender: "male",
      status: "active"
    },
    {
      id: 4150,
      name: "Mr. Mandaakin Khanna",
      email: "mr_khanna_mandaakin@ebert.org",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4149,
      name: "Preity Bhattathiri",
      email: "preity_bhattathiri@rohan.io",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4148,
      name: "Niranjan Bhattacharya",
      email: "bhattacharya_niranjan@wilkinson.biz",
      gender: "female",
      status: "active"
    },
    {
      id: 4147,
      name: "Deeptimoyee Johar",
      email: "deeptimoyee_johar@cole.co",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4146,
      name: "Anusuya Dhawan",
      email: "dhawan_anusuya@wintheiser-keeling.co",
      gender: "male",
      status: "inactive"
    },
    {
      id: 4145,
      name: "Sudeva Dubashi",
      email: "sudeva_dubashi@quitzon.name",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4144,
      name: "Ojaswini Menon",
      email: "menon_ojaswini@mclaughlin.info",
      gender: "male",
      status: "inactive"
    },
    {
      id: 4143,
      name: "Chaten Bharadwaj III",
      email: "iii_chaten_bharadwaj@mcglynn.net",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4142,
      name: "Dayaananda Verma",
      email: "verma_dayaananda@dooley-macejkovic.name",
      gender: "male",
      status: "active"
    },
    {
      id: 4141,
      name: "Rageshwari Banerjee",
      email: "banerjee_rageshwari@brekke.org",
      gender: "male",
      status: "active"
    },
    {
      id: 4140,
      name: "Gov. Aasa Gill",
      email: "gov_gill_aasa@beatty-pouros.com",
      gender: "male",
      status: "inactive"
    },
    {
      id: 4139,
      name: "Niranjan Dwivedi III",
      email: "dwivedi_iii_niranjan@rodriguez.io",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4138,
      name: "Anuraag Adiga",
      email: "anuraag_adiga@okon-windler.io",
      gender: "male",
      status: "active"
    },
    {
      id: 4137,
      name: "Dhana Malik",
      email: "dhana_malik@osinski-hansen.biz",
      gender: "male",
      status: "active"
    },
    {
      id: 4136,
      name: "Vimala Namboothiri",
      email: "namboothiri_vimala@gutmann.co",
      gender: "female",
      status: "inactive"
    },
    {
      id: 4135,
      name: "Mangalya Menon",
      email: "menon_mangalya@stanton.biz",
      gender: "male",
      status: "inactive"
    },
    {
      id: 4134,
      name: "Shresthi Saini",
      email: "shresthi_saini@hamill-feest.io",
      gender: "male",
      status: "active"
    },
    {
      id: 4133,
      name: "Oormila Reddy",
      email: "reddy_oormila@bosco-strosin.org",
      gender: "female",
      status: "inactive"
    }
  ];

  const styles = {
    border: "2px solid yellow",
    margin: "5px"
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {users.map((user) => (
        <div style={styles}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
