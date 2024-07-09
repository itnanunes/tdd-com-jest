const { soma, dobro } = require('./codigo')


describe('Funções matematicas', () => {
    beforeAll(() => {

        console.log('antes de tudo')
    })

    beforeEach(() => {
        console.log('dantes de cada teste')

    })

    afterEach(() => {
        console.log('depois de cada teste')

    })

    beforeAll(() => {
        console.log('depois de tudo')

    })

    it('Soma de dois valores', () => {

        expect(soma(2, 5)).toBe(7)
        expect(soma(2, 4)).toBe(6)
        expect(soma(21, 44)).toBe(65)

    });


    it('O dobro do valor', () => {

        expect(dobro(4)).toBe(8)
        expect(dobro(10)).toBe(20)
        expect(dobro(15)).toBe(30)

    });

})

