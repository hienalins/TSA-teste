// CUSTOM SELECT
Vue.component('v-select', VueSelect.VueSelect);

// ROUTE JS
const cadastro = {
  template: `<section id="cadastro">
    <div class="title-sec mb-3">
      <h1 class="content-limiter title">Cadastro</h1>
    </div>
    <div class="content-limiter">
      <form method="post" enctype="multipart/form-data" role="form">
        <div class="form-item">
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" v-model="nome" required="">
        </div>
        <div class="form-item">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" required="">
        </div>
        <div class="form-item">
          <label for="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" v-model="cpf" placeholder="111.111.111-01" required="">
        </div>
        <div class="column-spliter">
          <div class="form-item">
            <label for="endereco">Endereço</label>
            <input type="text" name="endereco" id="endereco" v-model="endereco" placeholder="Rua, Número e Bairro" required="">
          </div>
          <div class="form-item" id="est">
            <label for="estado">Estado</label>
            <v-select :options="estados" v-model="estado"></v-select>
          </div>
        </div>
        <div class="column-spliter">
          <div class="form-item">
            <label for="cep">CEP</label>
            <input type="text" name="cep" id="cep" v-model="cep" placeholder="22.222-000" required="">
          </div>
          <div class="form-item" id="cid">
            <label for="cidade">Cidade</label>
            <v-select :options="cidades" v-model="cidade"></v-select>
          </div>
        </div>

        <span class="block-title">Forma de Pagamento</span>

        <div class="column-spliter" style="margin-bottom: 1.5rem;">
          <div class="checkbox form-item">
            <input type="radio" name="forma" id="cartao" onclick="checar(true)" checked="checked">
            <span class="checkmark"></span>
            <label for="cartao">Cartão de Crédito</label>
          </div>
          <div class="checkbox form-item">
            <input type="radio" name="forma" id="boleto" onclick="checar(false)">
            <span class="checkmark"></span>
            <label for="boleto">Boleto Bancário</label>
          </div>
        </div>
        <div id="cart-div">
          <div class="column-spliter">
            <div class="form-item">
              <label for="nome-cartao">Nome no Cartão</label>
              <input type="text" name="nome-cartao" id="nome-cartao" placeholder="Nome impresso no cartão">
            </div>
            <div class="form-item">
              <label for="cidade">Data de Expiração</label>
              <div class="column-spliter">
                <div class="form-item" id="mes">
                  <v-select :options="meses"></v-select>
                </div>
                <div class="form-item" id="ano">
                  <v-select :options="anos"></v-select>
                </div>
              </div>
            </div>
          </div>
          <div class="column-spliter">
            <div class="form-item">
              <label for="num-cartao">Número no Cartão</label>
              <input type="text" name="num-cartao" id="num-cartao" placeholder="Número impresso no cartão">
            </div>
            <div class="form-item">
              <label for="cod-cartao">Código de Segurança</label>
              <input type="text" name="cod-cartao" id="cod-cartao" placeholder="XXX">
            </div>
          </div>

          <span class="block-title"></span>

          <h5>Seu cartão será debitado em R$ 49,00</h5>
        </div>

        <div id="bol-div">
          <div style="display: flex;">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="barcode-read" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-barcode-read fa-w-20" style="height: 60px; margin: 1rem 0;"><path fill="#445566" d="M152 0H8C3.6 0 0 3.6 0 8v152c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V32h120c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 480H32V352c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v152c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM632 0H488c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h120v128c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 344h-16c-4.4 0-8 3.6-8 8v128H488c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V352c0-4.4-3.6-8-8-8zM152 96h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm336 320h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8zM408 96h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm-192 0h-16c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm64 0h-16c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8z" class=""></path></svg>
            <h5 style="margin: 1rem;">Será gerado um boleto<br>no valor de R$ 49,00</h5>
          </div>
          <p>A confirmação poderá levar até 3 dias úteis</p>
        </div>

        <router-link to="/lista"><button type="button" class="std-btn" v-on:click="sendClient">REALIZAR MATRICULA</button></router-link>
        <p>Informações seguras e criptografadas</p>
        
      </form>

    </div>
  </section>`,
  data: function() {
    return{
      nome: '', email: '', cpf: '', endereco: '', estado: '', cep: '', cidade: '',
      estados: [
        {
          label: "Acre",
          code: "AC",
        },
        {
          label: "Alagoas",
          code: "AL",
        },
        {
          label: "Amapá",
          code: "AP",
        },
        {
          label: "Amazonas",
          code: "AM",
        },
        {
          label: "Bahia",
          code: "BA",
        },
        {
          label: "Ceará",
          code: "CE",
        },
        {
          label: "Espírito Santo",
          code: "ES",
        },
        {
          label: "Goiás",
          code: "GO",
        },
        {
          label: "Maranhão",
          code: "MA",
        },
        {
          label: "Mato Grosso",
          code: "MT",
        },
        {
          label: "Mato Grosso do Sul",
          code: "MS",
        },
        {
          label: "Minas Gerais",
          code: "MG",
        },
        {
          label: "Pará",
          code: "PA",
        },
        {
          label: "Paraíba",
          code: "PB",
        },
        {
          label: "Paraná",
          code: "PR",
        },
        {
          label: "Pernambuco",
          code: "PE",
        },
        {
          label: "Piauí",
          code: "PI",
        },
        {
          label: "Rio de Janeiro",
          code: "RJ",
        },
        {
          label: "Rio Grande do Norte",
          code: "RN",
        },
        {
          label: "Rio Grande do Sul",
          code: "RS",
        },
        {
          label: "Rondônia",
          code: "RO",
        },
        {
          label: "Roraima",
          code: "RR",
        },
        {
          label: "Santa Catarina",
          code: "SC",
        },
        {
          label: "São Paulo",
          code: "SP",
        },
        {
          label: "Sergipe",
          code: "SE",
        },
        {
          label: "Tocantins",
          code: "TO",
        },
        {
          label: "Distrito Federal",
          code: "DF",
        }
      ],
      cidades: [{
        label: "Rio Branco",
        code: "Rio Branco",
      },
      {
        label: "Maceió",
        code: "Maceió",
      },
      {
        label: "Macapá",
        code: "Macapá",
      },
      {
        label: "Manaus",
        code: "Manaus",
      },
      {
        label: "Salvador",
        code: "Salvador",
      },
      {
        label: "Fortaleza",
        code: "Fortaleza",
      },
      {
        label: "Vitória",
        code: "Vitória",
      },
      {
        label: "Goiânia",
        code: "Goiânia",
      },
      {
        label: "São Luís",
        code: "São Luís",
      },
      {
        label: "Cuiabá",
        code: "Cuiabá",
      },
      {
        label: "Campo Grande",
        code: "Campo Grande",
      },
      {
        label: "Belo Horizonte",
        code: "Belo Horizonte",
      },
      {
        label: "Belém",
        code: "Belém",
      },
      {
        label: "João Pessoa",
        code: "João Pessoa",
      },
      {
        label: "Curitiba",
        code: "Curitiba",
      },
      {
        label: "Recife",
        code: "Recife",
      },
      {
        label: "Teresina",
        code: "Teresina",
      },
      {
        label: "Rio de Janeiro",
        code: "Rio de Janeiro",
      },
      {
        label: "Natal",
        code: "Natal",
      },
      {
        label: "Porto Alegre",
        code: "Porto Alegre",
      },
      {
        label: "Porto Velho",
        code: "Porto Velho",
      },
      {
        label: "Boa Vista",
        code: "Boa Vista",
      },
      {
        label: "Florianópolis",
        code: "Florianópolis",
      },
      {
        label: "São Paulo",
        code: "São Paulo",
      },
      {
        label: "Aracaju",
        code: "Aracaju",
      },
      {
        label: "Palmas",
        code: "Palmas",
      },
      {
        label: "Brasília",
        code: "Brasília",
      }],
      meses: [
        {
          label: "JAN",
          code: "JAN",
        },
        {
          label: "FEV",
          code: "FEV",
        },
        {
          label: "MAR",
          code: "MAR",
        },
        {
          label: "ABR",
          code: "ABR",
        },
        {
          label: "MAI",
          code: "MAI",
        },
        {
          label: "JUN",
          code: "JUN",
        },
        {
          label: "JUL",
          code: "JUL",
        },
        {
          label: "AGO",
          code: "AGO",
        },
        {
          label: "SET",
          code: "SET",
        },
        {
          label: "OUT",
          code: "OUT",
        },
        {
          label: "NOV",
          code: "NOV",
        },
        {
          label: "DEZ",
          code: "DEZ",
        }
      ],
      anos: [
        {
          label: "2020",
          code: "2020",
        },
        {
          label: "2021",
          code: "2021",
        },
        {
          label: "2022",
          code: "2022",
        }
      ]
    }
  },
  methods: {
    sendClient(){
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
      var today = new Date();
      var date = (checkTime(today.getDate()))+'-'+(checkTime(today.getMonth()+1))+'-'+today.getFullYear();
      if(this.nome.trim() === '' && this.email.trim() === '' && this.cpf.trim() === ''){
        return;
      }
      this.$root.items.push({
        nome: this.nome,
        email: this.email,
        cpf: this.cpf,
        data: date
      })
      this.nome = '';
      this.email = '';
      this.cpf = '';
      this.endereco = '';
      this.estado = '';
      this.cep = '';
      this.cidade = '';
    }
  }
};
const lista = {
  template: `<section id="lista">
  <div class="title-sec mb-3">
    <h1 class="content-limiter title">Lista</h1>
  </div>
  
  <div class="content-limiter">
    <span class="block-title">
      Lista de Clientes
    </span>
    <div class="form-item">
      <label for="busca">Nome do Cliente</label>
      <input type="text" name="busca" id="busca">
    </div>
    <table>
      <tbody id="cliTable">
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Cpf</th>
          <th>Criado em</th>
        </tr>
        <tr v-for="item in items" :key="item.nome">
          <td>{{ item.nome }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.cpf }}</td>
          <td>{{ item.data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>`,
  data: function() {
    return{
      items: [{}]
    }
  },
  mounted: function(){
    this.items = this.$root.items;
  }
};

const routes = [
  {path: '/', component: cadastro},
  {path: '/cadastro', component: cadastro},
  {path: '/lista', component: lista}
];

const router = new VueRouter({
  routes
});

// MAIN PAGE
new Vue({
  el: '#app',
  template: `
  <div>
    <header>
      <ul>
        <li onclick="switchPage(this)"><router-link to="/lista">Lista</router-link></li>
        <li onclick="switchPage(this)"" class="marker"><router-link to="/cadastro">Cadastro</router-link></li>
      </ul>
    </header>
    
    <router-view></router-view>

    <footer class="mt-3">
      <h5>Enã M. Lins - 2020</h5>
    </footer>
  </div>
  
  `,
  data: {
    items: [
      { nome: 'Exemplo de Nome', email: 'sample@mail.com', cpf: '431.739.640-80', data: '30-07-2020' }
    ]
  },
  router
})

// TROCA O MARCADOR DE NAVEGAÇÃO DA HEADER
function switchPage(x){
  document.getElementsByClassName('marker')[0].removeAttribute('class', 'marker');
  x.setAttribute('class', 'marker');
}

// TOGGLE ENTRE CARTÃO / BOLETO
function checar(x){
  if(x == true){
    document.getElementById('cart-div').style.display="block";
    document.getElementById('bol-div').style.display="none";
  }else{
    document.getElementById('cart-div').style.display="none";
    document.getElementById('bol-div').style.display="block";
  }
}

// TABELA DE CLIENTES (ARMAZENADO EM ARRAY)
