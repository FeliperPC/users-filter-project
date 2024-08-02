export type IFilterOptions = {
    name: string
    startDate: Date | undefined
    endDate: Date | undefined
    status: boolean | undefined // para ser possível começar com nenhum valor selecionado
}