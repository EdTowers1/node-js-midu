import { platform, release, arch, cpus } from 'node:os'


console.log('info el sistema operativo:')
console.log('-----------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())