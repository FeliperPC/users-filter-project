export type IFilterOptions = {
    name: string
    startDate: Date
    endDate: Date
    status: boolean | undefined // para ser possível começar com nenhum valor selecionado
}