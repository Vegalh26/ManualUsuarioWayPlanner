import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Organiza tus viajes fácilmente',
        Svg: require('../../../static/img/SVG/undraw_vintage_q09n.svg').default,
        description: (
            <>
                Centraliza toda la información de tus viajes: itinerarios, billetes, maletas y más en una sola app.
            </>
        ),
    },
    {
        title: 'Sincronización en la nube',
        Svg: require('../../../static/img/SVG/undraw_file-search_cbur.svg').default,
        description: (
            <>
                Accede a tus datos desde cualquier dispositivo, sin perder ni un detalle.
            </>
        ),
    },
    {
        title: 'Planifica con mapas integrados',
        Svg: require('../../../static/img/SVG/undraw_delivery-location_um5t.svg').default,
        description: (
            <>
                Visualiza rutas, ubicaciones y organiza tus actividades con un mapa interactivo incorporado.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
