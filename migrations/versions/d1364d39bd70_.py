"""empty message

Revision ID: d1364d39bd70
Revises: 7c38d08dcb68
Create Date: 2025-03-06 18:00:51.029213

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd1364d39bd70'
down_revision = '7c38d08dcb68'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images_groups',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_group', sa.String(), nullable=False),
    sa.Column('url_foto', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('images_groups')
    # ### end Alembic commands ###
