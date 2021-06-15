import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "../ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
      <div>
          <SafeEnvironment />
          <PageTitle
              title={'Conheça os profissionais'}
              subtitle={'Preencha seu endereço e veja todos os profissionais da sua localiidade.'}
          />
          <UserInformation
              name={'Wagner Rigoli da Rosa'}
              picture={'https://github.com/wr2net.png'}
              rating={5}
              description={'São José/SC'}
          />
          <UserInformation
              name={'Géssica Camila Ortega de Lara'}
              picture={'https://github.com/gecamila.png'}
              rating={5}
              description={'São José/SC'}
          />
          <UserInformation
              name={'Fabio Rigoli da Rosa'}
              picture={'https://github.com/frdr.png'}
              rating={5}
              description={'São José/SC'}
          />
          <UserInformation
              name={'Wagner Rigoli da Rosa'}
              picture={'https://github.com/wr2net.png'}
              rating={5}
              description={'São José/SC'}
          />
          <UserInformation
              name={'Géssica Camila Ortega de Lara'}
              picture={'https://github.com/gecamila.png'}
              rating={5}
              description={'São José/SC'}
          />
          <UserInformation
              name={'Fabio Rigoli da Rosa'}
              picture={'https://github.com/frdr.png'}
              rating={5}
              description={'São José/SC'}
          />
      </div>
  )
}
