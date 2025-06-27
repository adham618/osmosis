import Image from 'next/image'
import Link from 'next/link'

import Breadcrumb from '../common/Breadcrumb'

export default function Error() {
  return (
    <>
      <Breadcrumb title="Error" subtitle="Error" />
      <section className="page_not_found">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade-in">
              <Image src="/assets/img/404.svg" alt="404" width={500} height={500} />
              <h2>Page not found: /error</h2>
              <p>Please try searching for some other page.</p>
              <Link href="/" className="bg_btn bt">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
