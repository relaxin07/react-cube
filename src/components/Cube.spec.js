import React from "react";
import Cube from './Cube';

describe('test one', () => {
    const Props = {
        rows: 4,
        cols: 4,
    }
    const Wrapper = mount(<Cube {...Props} />)
    console.log(Wrapper.debug());

    it('Проверяем что отрисовалось 4 рядка', () => {
        expect(Wrapper.find('.cube__row')).toHaveLength(Props.rows)
    })
    it('Проверяем что отрисовалось по 4 кубика в каждом рядке', () => {
        Wrapper.find('.cube__row').forEach((items) => {
            expect(items.find('.cube__item').length).toEqual( Props.cols )
        });
    })
    it('Провряем добавление рядка', () => {
        const btn = Wrapper.find('.cube__add-row')
        btn.simulate('click');
        Props.rows = Props.rows + 1;
        expect(Wrapper.find('.cube__row')).toHaveLength(Props.rows )

    })
    it('Провряем добавление столбца', () => {
        const btn = Wrapper.find('.cube__add-item')
        btn.simulate('click');
        Props.cols = Props.cols + 1;
        Wrapper.find('.cube__row').forEach((items) => {
            expect(items.find('.cube__item').length).toEqual(Props.cols)
        });
    })
    it('Проверяем удаление столбца', () => {
        const btns = Wrapper.find('.cube__remove-item')
        btns.simulate('click');
        Props.cols = Props.cols - 1;
        Wrapper.find('.cube__row').forEach((items) => {
            expect(items.find('.cube__item').length).toEqual(Props.cols)
        });

    })
    it('Проверяем удаление рядка', () => {
        const btns = Wrapper.find('.cube__remove-row')
        btns.simulate('click');
        Props.rows = Props.rows - 1;
        expect(Wrapper.find('.cube__row')).toHaveLength(Props.rows )
    })

})

describe('Test two ', () => {
    const Props = {
        rows: 1,
        cols: 1,
    }
    const Wrapper = mount(<Cube {...Props} />)
    it('Проверим удаление рядка если он равен 1',  () => {
        const btns = Wrapper.find('.cube__remove-row')
        btns.simulate('click');
        expect(Wrapper.find('.cube__row')).toHaveLength(1)
    })
    it('Проверим удаление столбца если он равен 1',  () => {
        const btns = Wrapper.find('.cube__remove-item')
        btns.simulate('click');
        Wrapper.find('.cube__row').forEach((items) => {
            expect(items.find('.cube__item').length).toEqual(1)
        })
    })
})
