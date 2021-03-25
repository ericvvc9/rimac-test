
export const required: (t: any) => undefined | any = value => (value ? undefined : 'Campo obligatorio');
export const mustBeNumber: (t: any) => undefined | any = value => (isNaN(value) ? 'El campo debe ser un numero' : undefined)
